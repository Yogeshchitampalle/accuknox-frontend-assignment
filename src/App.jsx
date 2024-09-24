import Layout from './Components/MainNavigation/Layout/Layout'
import Cnappdash from './Components/CnappDash/Cnappdash'
import CnapCard from './Components/CnappDash/Cnappcards/CnapCard'
import CwppDash from './Components/CwppDash/CwppDash'
import CwppCard from './Components/CwppDash/CwppCard'
import RegisteryDash from './Components/RegistryScan/RegisteryDash'
import RegCard from './Components/RegistryScan/RegCard'

function App() {

  return (
    <>
    <Layout>
         <Cnappdash/>
         <CnapCard/>
         <CwppDash/>
         <CwppCard/>
         <RegisteryDash/>
         <RegCard/>
    </Layout>
    </>
  )
}

export default App
