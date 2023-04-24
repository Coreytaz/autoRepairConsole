import { useStoreViewer } from './store';
import { Viewer } from './types';

export const setViewer = (
  data: Viewer | Partial<Viewer> | ((state: Viewer) => Viewer | Partial<Viewer>)
) => useStoreViewer.setState(data);
