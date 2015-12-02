angular.module("starter.services", [])
    
    
    .factory('FacebookService', function ( $ionicPopup, $auth, $http){
    
        var facebookAgiURL = 'https://graph.facebook.com/v2/2';
    
        return{
            me: function () {
                if ($auth.isAuthenticated()){
                    return $http.get(facebookAgiURL + '/me', {
                        params: {
                            access_token: $auth.getToken(),
                            fields: 'id,name,link,gender,location,website,picture,relationship_status',
                            format: 'json'
                        }
                    });
                }else{
                    
                    $ionicPopup.alert({
                        title: 'Failed',
                        content: 'No Authentication'
                    
                    });
                }
            }
        }     

    
    });
    
