exports.home = (req, res) => {
    res.render('home', { 
        title: "Home Page", 
        showToast: true 
    });
};

exports.about = (req, res) => {
    res.render('about', { title: "About Us", layout: true });
};
