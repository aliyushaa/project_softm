function Main() {
    return (
        <head>
            <title>softm</title>
            <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap" rel="stylesheet">
                <style type="text/css">
                    body{
                    margin: 0;
                    padding: 0;
                }
                    .wrapper{
                    width: 100%;
                    height: 100vh;
                    background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.9)) , url(into.jpg) center;
                    background-size: cover ;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 2vw;
                    color: #fff;
                }
                    @keyframes animate {
                    0 % {
                        transform: scale(0);
                    }
                    100%{
                    transform: scale(1);
                }
                }
                    h1{
                    animation: animate 2s 1;
                    font-family: 'Oswald', sans-serif;

                }
                    .btn{
                    text - decoration: none;
                    padding: 10px 50px ;
                    color: #ffffff;
                    border: 2px solid #ffffff;
                    transition: 0.6s ease;
                    animation: animate 2s 1;
                    font-family: 'Oswald', sans-serif;
                }
                    .btn:hover{
                    background - color: #ffffff;
                    color:#000 ;
                }
                </style>
        </head>
    <body>
    <div className="w-full h-full bg-[#]">
        <h1>STAY WITH SOFTM</h1>
        <a href="authorization.html" className="btn">GET STARTED</a>

    </div>

    </body>
)
}
export default Main;