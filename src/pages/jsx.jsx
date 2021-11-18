

export default function Jsx() {
   const titulo = <h1>Maicon</h1>

    function subtitulo(){
        return <h2>Subtitulo</h2>
    }
 

    return (

        <div >
            {titulo}
            <p>
           {subtitulo()}
            </p>
        </div>

    )
}