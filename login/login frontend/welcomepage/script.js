$(".logout").click(function () {
  localStorage.removeItem("token");
  window.location.href = "../login/index.html";
});
