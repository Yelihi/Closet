import useMediaQuery from './useMediaQuery';

export default function useBreakpoints() {
  const breakpoints = {
    phone: useMediaQuery('(max-width: 786px)'),
    tablet: useMediaQuery('(max-width: 1022px)'),
    desktop: useMediaQuery('(min-width: 1300px)'),
    active: 'phone',
  };
  if (breakpoints.phone) breakpoints.active = 'phone';
  if (breakpoints.tablet) breakpoints.active = 'tablet';
  if (breakpoints.desktop) breakpoints.active = 'desktop';
  return breakpoints;
}
