import functools
import concurrent.futures
from typing import Callable, Optional, Any


def with_timeout(error_message: Optional[Callable[[Any, float], str]] = None):
    """Decorator to add a timeout mechanism with an optional custom error message.

    Args:
        error_message (Optional[Callable[[Any, float], str]]): A callable that accepts `self` and `timeout`,
                                                               and returns a string error message.
    """
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # Get function argument names
            arg_names = func.__code__.co_varnames[:func.__code__.co_argcount]
            arg_dict = dict(zip(arg_names, args))

            # Extract self if method is bound
            self_instance = args[0] if args else None

            # Check for 'timeout' in kwargs first, then in positional arguments
            timeout = kwargs.get('timeout', arg_dict.get('timeout', None))

            if timeout is None or timeout == 0:
                # If timeout is None or 0, run the function normally
                return func(*args, **kwargs)

            if timeout < 0:
                raise ValueError("Timeout must be a non-negative number or None.")

            with concurrent.futures.ThreadPoolExecutor() as executor:
                future = executor.submit(func, *args, **kwargs)
                try:
                    return future.result(timeout=timeout)
                except concurrent.futures.TimeoutError:
                    # Use custom error message if provided, otherwise default
                    msg = error_message(self_instance, timeout) if error_message else f"Function '{func.__name__}' exceeded timeout of {timeout} seconds."
                    raise TimeoutError(msg)
        return wrapper
    return decorator
