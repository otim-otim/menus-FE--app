
import './App.css'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import Menus from './components/menus/Menus';
import SideBar from './components/SideBar';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import ParentMenuDropdown from './components/menus/ParentMenuDropdown'

// Create a client
const queryClient = new QueryClient()

function App() {
  

  return (
    <>
      <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={false} />
      <RecoilRoot>
      <div className=" bg-white">
  <SideBar />
  <main className="p-4 ml-[260px] bg-green">
  <Header />
  <PageTitle />
  <ParentMenuDropdown />
    <Menus />
  </main>
</div>
     </RecoilRoot> 
     </QueryClientProvider>
    </>
  )
}

export default App
