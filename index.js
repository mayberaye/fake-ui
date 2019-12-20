const root = document.querySelector("#root");

const header = "<header><h1>Hello World!</h1></header>";
root.innerHTML += header;

const form = `
<form id="fakeUI" action="https://formspree.io/xqkeenry" method="POST">
    <input type='text' id='firstName' placeholder='first name'>
    <input type = 'text' id='lastName' placeholder='last name'>
    <textarea id='messageBox' placeholder='your message here'></textarea>
    <div id="yesOrNo">
        <input type ='radio' id='yes' name ="yesOrNo" value='yes'>
        <label for='yes'>Yes</label>
        <input type ='radio' id='no' name ='yesOrNo' value='no'>
        <label for='no'>No</label>
    </div>
    <select name="pets" id="pets">
        <option value="">--Please choose an option--</option>
        <option value="dog">Dog</option>
        <option value="cat">Cat</option>
        <option value="hamster">Hamster</option>
        <option value="parrot">Parrot</option>
        <option value="spider">Spider</option>
        <option value="goldfish">Goldfish</option>
    </select>
    <input type="submit" id="submit">
</form>
`;
root.innerHTML += form;
