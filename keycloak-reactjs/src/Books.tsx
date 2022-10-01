import { useKeycloak } from "@react-keycloak/web"

export const Books: React.FC = ()=>{  
    
    const {keycloak} = useKeycloak()

    const tokenParsed = keycloak.tokenParsed
   
    return(
        <div>
            <h1>Books</h1>

            <img src={tokenParsed?.avatar_url} alt="foto bonita" />
            <hr />
            <span>{tokenParsed?.name}</span>
        </div>
    )

}