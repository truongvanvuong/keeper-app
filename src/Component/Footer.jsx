const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright ⒸVanVuong {currentYear}</p>
    </div>
  );
};
export default Footer;
