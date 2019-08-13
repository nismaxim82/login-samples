import { Button, Footer, FooterTab, Thumbnail } from 'native-base'
import React from 'react'
import styles from './PartFooter.css'

// TODO(developing): remove this row or add some comment on why this line is there
const s = styles

const PartFooter = () => {
    return (
        <Footer>
            <FooterTab>
                <Button>
                    <Thumbnail square
                        source={{ uri: require('../../../Images/fingerprint.png') }}
                        className="footer__icon"
                    />
                </Button>
                <Button>
                    <Thumbnail square
                        source={{ uri: require('../../../Images/pattern_lock.png') }}
                        className="footer__icon"
                    />
                </Button>
                <Button>
                    <Thumbnail square
                        source={{ uri: require('../../../Images/face_recognition.png') }}
                        className="footer__icon"
                    />
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default PartFooter
