function LogInIcon(props) {
  return (
    <img
      {...props}
      src={
        "https://cdn.prod.website-files.com/5ff3926f03b3ba26b7d639cb/60c388bf3c3ae4d1d10653e7_Abstract_Wordmark-White.svg"
      }
      alt="Log In Icon"
      width="40"
      height="40"
    />
  );
}
function Footer() {
  return (
    <>
      <footer className="h-full pb-20 bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="font-bold mb-2">Abstract</h3>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Company</h3>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
            <br />
            <h3 className="font-bold mb-2">Contact Us</h3>
            <ul>
              <li>info@abstract.com</li>
            </ul>
          </div>
          <div className="" style={{ position: "relative", bottom: "0", top:"70px" }}>
            <p style={{ position: "absolute", bottom: "0" }}>
              <div className="">
                <LogInIcon className="w-20 h-12" />
              </div>
              <p>© Copyright 2022</p>
              <p>Abstract Studio Design, Inc.</p>
              <p>All rights reserved</p>
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}

export default Footer;
