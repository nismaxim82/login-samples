import FaceRecognitionComponent from '../../Components/FaceRecognitionComponent'
import FingerPrintComponent from '../../Components/FingerPrintComponent'
import HomeComponent from '../../Components/HomeComponent'
import PatternLockComponent from '../../Components/PatternLockComponent'

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
