import { Sidebar } from '../Sidebar';
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