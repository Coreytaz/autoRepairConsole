import { create } from 'zustand';

import { Viewer } from './types';

type State = Viewer & {};

type Action = {};

const initialState: State = {
  id: '',
  email: '',
  Fullname: '',
  avatar: '',
  login: '',
};

export const useStoreViewer = create<State & Action>(() => ({
  ...initialState,
}));
