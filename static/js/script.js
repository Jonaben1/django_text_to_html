TextConvert = () => {
    let x = CKEDITOR.instances['id_body'].getData();
    let y = document.getElementById('htmldata');
    y.innerHTML = x;
}

