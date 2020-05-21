import React from 'react';
import '../styles/sass/main.css';

const ComingSoon = () => {

    return (
        <div>
            <div>
                <br></br>    
                <h1>Títulos</h1>
                <h1 class="title-1">Este es h1, clase: title-1</h1>
                <h2 class="title-2">Este es H2, clase: title-2</h2>
                <h3 class="title-3">Este es H3, clase: title-3</h3>
                <h4 class="title-4">Este es H4, clase: title-4</h4>
                <h5 class="title-5">Este es H5, clase: title-5</h5>
                <h6 class="title-6">Este es H6, clase: title-6</h6>

            </div>
                <br></br>    
                <h1>Parrafos</h1>
                <p class="text-1">text-1</p>
                <p class="text-2">text-2</p>
                <div class="text-3-box">
                    <p class="text-3">text-3</p>
                </div>
                
            <div>

            </div>

            <div>
                <br></br>
                <br></br>
                <h1>Botones</h1>
                <button class="btn btn-primary button-1">clase: button-1</button>
                <br></br>
                <br></br>
                <button class="btn btn-secondary button-2">clase: button-2</button>
                <br></br>
                <br></br>
                <button class="btn btn-success button-3">clase: button-3</button>
            </div>

            <div>
                <br></br>
                <br></br>
                <h1>Links</h1>
                <a class="link-1">clase: link-1</a>
                <br></br>
                <a class="link-2">clase: link-2</a>
                <br></br>
                <div class="text-3-box">
                    <a class="link-3">clase: link-3</a>
                </div>
                
            </div>

            <div>
                <br></br>
                <br></br>
                <h1>forms</h1>
                <form class="form-1">
                    <input class="input-1" placeholder="input-1"></input>
                </form>
                <br></br>
                <form class="form-2">
                    <p class="text-3">text-3</p>
                    <input class="input-2"></input>
                </form>
                <br></br>
                <form class="form-3">
                    <p class="text-2">text-2</p>
                    <input class="input-3"></input>
                </form>
                
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </div>
        
    )
}


export default ComingSoon;