window.addEventListener('DOMContentLoaded', (event) => {
    
const ps = new Photoshop('canvas');
ps.drawImage();


document.querySelector('#circleBrush')
    .addEventListener('click',() => ps.setBrush('circle'));

document.querySelector('#squareBrush')
    .addEventListener('click',() => ps.setBrush('square'));

    document.querySelector('#darkness')
            .addEventListener('click',()=>ps.darkenFilter());

    document.querySelector('#brightness')
            .addEventListener('click',()=>ps.brightnessFilter())
            ;

            document.querySelector('.clear-Workspace')
            .addEventListener('click',(e)=>ps.clearWorkspace(e));

            document.querySelector('.fa-adjust')
            .addEventListener('click',()=>ps.monoImage())

            document.querySelector('.fa-eraser')
            .addEventListener('click',()=>ps.clearMouse());

            document.querySelector('.fa-spray-can')
            .addEventListener('click',()=>ps.sprayDraw())
            document.querySelector('.fa-water')
            .addEventListener('click',()=>ps.waveEffect())

            document.querySelector('.fa-chess-board').addEventListener('click',()=>ps.textureFilter());

            document.querySelector('#colorChange')
            .addEventListener('change',()=>ps.setColorBrush(document.querySelector('#colorChange').value));

            document.querySelector('#BrushSize')
            .addEventListener('change',()=>ps.setSizeBrush(document.querySelector('#BrushSize').value));

});           
