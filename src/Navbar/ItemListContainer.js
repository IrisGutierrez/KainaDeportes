function Listado(props) {
    return (
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="index.html">{props.Mensaje}</a>
                </div>
            </nav>
        </div>
    )
}
export default Listado;