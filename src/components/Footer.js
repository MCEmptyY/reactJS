import React from "react";

export default function Footer() {
  return (
    <div
      className="container-fluid footer"
      style={{ backgroundColor: "#f3e456" }}
    >
      <div className="row align-items-center justify-content-between">
        <div className="col-md ps-5 pt-3s ">
          <div className="lead"></div>
          <h1>Our Address:</h1>
          <p>121, Clear Water Ray Road Clear Water Bay, Kowloon HONGKONG</p>
          <p>
            <i class="fa-solid fa-phone">:+099 999 999</i>
          </p>
          <p>
            <i class="fa-solid fa-address-book">:+123 456 788</i>
          </p>
          <p>
            <i class="fa-solid fa-envelope">:lorem@gamil.com</i>
          </p>
        </div>
        <div className="col-md p-5 h3 text-center ">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-google-plus"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <hr />
          <h6> Designed by MC | Version: 1.0.0 | 26/11/2021</h6>
        </div>
      </div>
    </div>
  );
}
