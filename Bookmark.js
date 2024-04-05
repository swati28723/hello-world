document.getElementById("bookmarkForm").addEventListener("submit", function(event) 
{
    event.preventDefault();

    var siteName = document.getElementById("siteNameInput").value.trim();
    var siteUrl = document.getElementById("siteUrlInput").value.trim();

    if (siteName === "") 
    {
        document.getElementById("siteNameError").style.display = "block";
        // document.getElementById("transparent").style.height = "60%"
    } 
    else 
    {
        document.getElementById("siteNameError").style.display = "none";
        // document.getElementById("transparent").style.height = "50%"
    }


    if (siteUrl === "") 
    {
        document.getElementById("siteUrlError").style.display = "block";
        // document.getElementById("transparent").style.height = "60%"
    } 
    else 
    {
        document.getElementById("siteUrlError").style.display = "none";
        // document.getElementById("transparent").style.height = "50%"
    }


    if ((siteName !== "" && siteUrl === "") || (siteName === "" && siteUrl !== ""))
    {
        document.getElementById("transparent").style.height = "50%"
    }

    
    if (siteName !== "" && siteUrl !== "") 
    {
        var newBookmark = document.createElement("div");
        newBookmark.classList.add("transparent");
        document.getElementById("transparent").style.height = "50%"
        document.getElementById("transparent").style.marginBottom = "10px"
        newBookmark.style.width = '100%'
        newBookmark.style.padding = '10px'
        newBookmark.style.margin = '10px'

        var bookmarkName = document.createElement("p");
        bookmarkName.textContent = siteName;
        var bookmarkLink = document.createElement("a");
        bookmarkLink.href = siteUrl;
        bookmarkLink.textContent = siteUrl;

        newBookmark.appendChild(bookmarkName);
        newBookmark.appendChild(bookmarkLink);

        document.getElementById("bookmarkList").appendChild(newBookmark);

        document.getElementById("bookmarkForm").reset();
    }
});


document.getElementById("siteNameInput").addEventListener("input", function() {
    document.getElementById("siteNameError").style.display = "none";
});

document.getElementById("siteUrlInput").addEventListener("input", function() {
    document.getElementById("siteUrlError").style.display = "none";
});

