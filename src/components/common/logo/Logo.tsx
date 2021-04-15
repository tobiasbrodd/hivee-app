import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import styled from 'styled-components';
import logo from "../../../assets/logo.png";

function Logo() {
    return (
        <LogoContainer>
            <LogoLink component={RouterLink} to="/">
                <Container>
                    <Image
                        alt="Hivee"
                        src={logo}
                    />
                    <Title>
                        Hivee
                    </Title>
                </Container>
            </LogoLink>
        </LogoContainer>
    );
}

const LogoContainer = styled.div`
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    height: 50px;
`;

const LogoLink = styled(Link)`
    text-decoration: none !important;
    color: inherit;
` as typeof Link;

const Title = styled.h3`
    padding-left: 8px;
    height: 30px;
`;

export default Logo;