import React from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function FbChatPlugin() {
    // const htmlRef = React.useRef(null);
    return (
        <>
            { typeof window !== 'undefiend' &&  <MessengerCustomerChat
                pageId="100636969001395"
                appId="589524615498057"
                // htmlRef="fb-customer-chat"
            /> },
        </>
    )
}


{/* <script>
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "100636969001395");
chatbox.setAttribute("attribution", "biz_inbox");

window.fbAsyncInit = function() {
  FB.init({
    xfbml            : true,
    version          : 'v12.0'
  });
};

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script> */}
