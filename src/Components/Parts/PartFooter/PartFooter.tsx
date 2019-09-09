import { Button, Footer, FooterTab, Icon } from 'native-base'
import React from 'react'
import styles from './PartFooter.css'

// TODO(developing): remove this row or add some comment on why this line is there
const s = styles

const PartFooter = () => {
    return (
        <Footer>
            <FooterTab>
                <Button>
                    <Icon
                        name="fingerprint"
                        className="footer__icon"
                    />
                </Button>
                <Button>
                    <Icon
                        name="lock-pattern"
                        className="footer__icon"
                    />
                </Button>
                <Button>
                    <Icon
                        name="face-recognition"
                        className="footer__icon"
                    />
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default PartFooter
