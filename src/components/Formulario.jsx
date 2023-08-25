import styled from "@emotion/styled"

const ImputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 100px;
    color: FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    &:hover {
        background-color:#7A7DFE;
        cursor : pointer
    }
  
`

const formulario = () => {
  return (
    <div>
      <form>
        <input type="submit" value="Cotizar" ></input>
      </form>
    </div>
  )
}
export default formulario
