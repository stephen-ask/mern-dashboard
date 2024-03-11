import { Sidebar } from '../Sidebar/Sidebar.js';
import { Header } from '../Header';

const Layout =({children}) =>{
    return(
        <>
          <div className='row'>
            <Sidebar/>
            <main>
              <Header />
              {children}
            </main>
          </div>
        </>
    )
}

export default Layout;