import { Container, Row, Col } from "reactstrap";
const Footer = () => {
  return (
    <footer className="container footer">
      <Container fluid={true} className="text-white">
        <Row className="py-3">
          <Col md={6} className="text-center text-md-start">
            <h4>Thông tin về chúng tôi</h4>
            <div class="col-md-6 col-lg-6 ">
              <p class="mb-2">
                <i class="bi bi-geo-alt me-3"></i> Hòa Hải - Ngũ Hành Sơn - Đà
                Nẵng
              </p>
              <p class="mb-2">
                <i class="bi bi-telephone-fill me-3"></i>+012 345 67890
              </p>
              <p class="mb-2">
                <i class="bi bi-envelope-fill me-3"></i>info@example.com
              </p>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <h4>Liên hệ</h4>
            <p>
              <i class="bi bi-github me-3" /> DE160490
            </p>
            <p class="mb-2">
              <i class="bi bi-telephone-fill me-3"></i> +0363 012 495
            </p>
            <p class="mb-2">
              <i class="bi bi-envelope-fill me-3"></i> thanhncde160490@fpt
            </p>
            <p class="mb-2">
              <i class="bi bi-geo-alt me-3"></i> Hòa Hải - Ngũ Hành Sơn - Đà
              Nẵng
            </p>
            <div className="col-md-9 wrapperfooter">
              <a href="https://twitter.com/?lang=vi">
                <i class="bi bi-twitter" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100046687181628">
                <i class="bi bi-facebook" />
              </a>
              <a href="https://www.youtube.com/">
                <i class="bi bi-youtube" />
              </a>
              <a href="https://github.com/DE160490">
                <i class="bi bi-github" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
