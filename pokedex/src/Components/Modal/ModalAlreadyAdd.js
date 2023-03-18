
import Modal from "react-modal"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

export function ModalAlreadyAdd() {

  const context = useContext(GlobalContext)
  const { modalAlreadyAdd, fecharAlreadyAdd } = context;

  return (

    <Modal isOpen={modalAlreadyAdd} onRequestClose={fecharAlreadyAdd}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0 ,0, 0.6)',
          zIndex: "100"
        },
        content: {
          position: "absolute",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          margin: "auto",
          width: "451px",
          height: "222px",
          textAlign: "center",
          borderRadius: '12px',
          backgroundColor: "#FFFFFF",
        }
      }}>
      <div style={{display:"flex", flexDirection:"column", height:"100%", justifyContent:"center"}}>
        <h1 style={{margin:"0", fontWeight:"700", fontSize:"48px", lineHeight: "72px"}}>Chill!</h1>
        <p style={{margin:"0", fontWeight:"700", fontSize:"20px", lineHeight: "24px"}}>O Pokémon já está na sua Pokédex</p>
      </div>
    </Modal>
  )
}