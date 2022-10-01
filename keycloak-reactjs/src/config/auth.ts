import Keycloak from 'keycloak-js'

export const keycloak = Keycloak({
    url: 'http://127.0.0.1:8080/auth/',
    realm: 'books',
    clientId: 'reactjs',  
})