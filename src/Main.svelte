<style >
    .box {
        display: flex;
        flex-direction: column;
        background-color: yellow;
        width: 100%;
        height: 100%;
        font-family: 'Arial', sans-serif
    }
    .box>body {
       background-color: aqua;
    }
    .box>body>main>.container{
        background-color: #00fe00;
        font-family: 'Century Gothic', sans-serif
    }
    .box>body>main>.container>section>h1{
        font-size: medium;
        font-weight: bolder;
    }
    .box>body>header{
        font-weight: 900;
        font-size: larger;
    }
</style>

<div class="box">
    <body>
        <header class="header">
            You're in our restaurant
        </header>
        <main>
            <div class="container">
                <section>
                    <h1>HI!</h1>
                </section>
                <section>
                    Do you want to eat some {pasta}?
                    With any? {types.sauce} for sauce? {types.cheese} for cheese?
                </section>
            </div>
        </main>
    </body>
</div>

<script>
    export let pasta
    export let types
</script>