import { Body, Button, Header, Icon, Left, Right, Title } from 'native-base'
import React from 'react'

const PartHeader = () => {
    return (
        <Header>
            <Left>
                <Button transparent>
                    <Icon name="chevron-left" />
                </Button>
            </Left>
            <Body>
                <Title>Logins sample</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name="menu" />
                </Button>
            </Right>
        </Header>
    )
}

export default PartHeader
