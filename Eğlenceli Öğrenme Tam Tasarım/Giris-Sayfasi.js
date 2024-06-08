function selectAvatar(element) {
  // Tüm avatarların border'ını sıfırla
  var avatars = document.querySelectorAll(".avatar");
  avatars.forEach(function (avatar) {
    avatar.classList.remove("selected");
  });

  // Seçilen avatarın border'ını ekle
  element.classList.add("selected");
}
