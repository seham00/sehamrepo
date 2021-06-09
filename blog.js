
function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild; 
}

function blogSubmit() {
    var title = document.getElementById("titleInput").value;
    var text = document.getElementById("textInput").value;
    var titleErr = document.getElementById("titleErr");
    var textErr = document.getElementById("textErr");
    
    /* Validate submission form */
    if (title == "") {
        titleErr.style.display = "block";
    } else {
        titleErr.style.display = "none";
    }
    if (text == "") {
        textErr.style.display = "block";
    } else {
        textErr.style.display = "none";
    }
    if (title != "" && text != "") {
        var author="Anonymous";
        var parentNode = document.getElementById("blogPosts");
        var blogInnerHtml = `
        <div class="container-fluid">
          <div class="row">
          <div class="col-xl-10 col-lg-10 col-md-11 col-11 mx-auto my-5">
            <div class="row gx-5 mx-sm-auto">
              <div class="col-lg-8 col-md-11 col-11 mx-auto">
                <div class="row gy-5">
                  <div class="col-12 card p-4 shadow blog-elfrt__div">
                   <div class="d-flex justify-content-center align-item-center flex-column pt-3 pb-5">
                     <h1 class="main_heading">${title}</h1>
                     <p class="blogTitle"><span">${author}</span>${author}</p>
                     <p><span class="font-weight-bold"> ${text}</span></p>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div></div>
        <div class="editForm" style="display:none">
        <h4>Edit this blog post</h4>
        <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" placeholder="Enter a Title" value="${title}">
        </div>
        
        <div class="form-group">
            <label>Text</label>
            <textarea rows="4" class="form-control" id="textInput" placeholder="Enter text">${text}</textarea>
        </div>

        <button onclick="blogEdit(this)" class="btn btn-lg btn-primary">Submit</button>
      </div>
      </div>    
      </div>
      </div>
`

var element = createElementFromHTML(blogInnerHtml);
        parentNode.prepend(element);
    }
}
