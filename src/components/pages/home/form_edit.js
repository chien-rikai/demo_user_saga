import ReactDOM from 'react-dom';

function FormEdit(props){
    console.log(props);
    let {id, name, email, phone} = props;
        return ReactDOM.createPortal(
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                <form>
                <fieldset>
                    <div class="form-group">
                        <label>Name</label>
                        <input defaultValue={name} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input defaultValue={email} type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Phones</label>
                        <input defaultValue={phone} type="text" class="form-control"/>
                    </div>
                </fieldset>
                </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>, document.getElementById('modal-root')
    );
}
export default FormEdit;