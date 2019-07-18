import FaceRecognitionComponent from '../../Components/Views/FaceRecognitionView'
import FingerPrintComponent from '../../Components/Views/FingerPrintView'
import HomeComponent from '../../Components/Views/Home/HomeView'
import PatternLockComponent from '../../Components/Views/PatternLockView'

const routes = [
    {
        exact: true,
        path: '/',
        component: HomeComponent,
    },
    {
        exact: false,
        path: '/FingerPrint',
        component: FingerPrintComponent,
    },
    {
        exact: false,
        path: '/PatternLock',
        component: PatternLockComponent,
    },
    {
        exact: false,
        path: '/FaceRecognition',
        component: FaceRecognitionComponent,
    },
]

export default routes
