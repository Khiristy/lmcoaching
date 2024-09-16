import { renderHook, act } from '@testing-library/react-hooks';
import useLoaderAnimations from '../../features/Hooks/Loader/useLoaderAnimations';

test('should toggle animation stages correctly', () => {
    const { result } = renderHook(() => useLoaderAnimations());
    
    // Initial state: fadeIn
    expect(result.current.animationState.stage).toBe('fadeIn');

    // Advance timer by 5000ms
    act(() => {
        jest.advanceTimersByTime(5000);
    });

    // Check if stage switches to exit after 5 seconds
    expect(result.current.animationState.stage).toBe('exit');
});
