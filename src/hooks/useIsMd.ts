import { useBreakpointValue } from '@chakra-ui/media-query';

export const useIsMd = () =>
  Boolean(useBreakpointValue({ base: false, md: true }));
