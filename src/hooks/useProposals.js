import { useState } from "react"

const useProposals = () => {
    const [proposals, setProposals] = useState({
        loading: true,
        data: [],
    });

    useEffect(() => {
      const contract = getProposalsContract(readOnlyProvider);

      
    
      return () => {
        second
      }
    }, [third])
    
}