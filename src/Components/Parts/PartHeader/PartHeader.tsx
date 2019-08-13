import { inject, observer } from 'mobx-react'
import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base'
import React from 'react'
import AppStore from '../../../Core/Store/AppStore'

interface IProps {
    appStore?: AppStore
}

const PartHeader = inject('appStore')
    (observer((props: IProps) => {
        return (
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="chevron-left" />
                    </Button>
                </Left>
                <Body>
                    <Title>{props.appStore.title}</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Right>
            </Header>
        )
    }))

export default PartHeader
