import { useWeb3ModalAccount } from "@web3modal/ethers/react"

export default function Header () {
  const {address} = useWeb3ModalAccount();
  return (
    <Container>
        <div>Ballot</div>
        <Flex>

        </Flex>
    </Container>
  )
}