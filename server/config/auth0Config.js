import {auth} from 'express-oauth2-jwt-bearer'

const jwtCheck = auth({
    audience: "http://localhost:8080",
    issuerBaseURL: "https://dev-k18ywujcrbpggmdi.us.auth0.com",
    tokenSigningAlg: "RS256"
})

export default jwtCheck