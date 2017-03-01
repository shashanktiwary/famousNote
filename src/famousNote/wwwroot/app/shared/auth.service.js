"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var oidc_client_1 = require("oidc-client");
var AuthService = (function () {
    function AuthService(http) {
        var _this = this;
        this.http = http;
        this.mgr = new oidc_client_1.UserManager(settings);
        this.userLoadededEvent = new core_1.EventEmitter();
        this.loggedIn = false;
        console.log('auth service constructor called.');
        this.mgr.getUser()
            .then(function (user) {
            if (user) {
                _this.loggedIn = true;
                _this.currentUser = user;
                _this.userLoadededEvent.emit(user);
            }
            else {
                _this.loggedIn = false;
            }
        })
            .catch(function (err) {
            _this.loggedIn = false;
        });
        this.mgr.events.addUserUnloaded(function (e) {
            //   if (!environment.production) {
            console.log("user unloaded");
            //   }
            _this.loggedIn = false;
        });
    }
    AuthService.prototype.clearState = function () {
        this.mgr.clearStaleState().then(function () {
            console.log("clearStateState success");
        }).catch(function (e) {
            console.log("clearStateState error", e.message);
        });
    };
    AuthService.prototype.getUser = function () {
        var _this = this;
        this.mgr.getUser().then(function (user) {
            console.log("got user", user);
            _this.userLoadededEvent.emit(user);
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.removeUser = function () {
        var _this = this;
        this.mgr.removeUser().then(function () {
            _this.userLoadededEvent.emit(null);
            console.log("user removed");
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.startSigninMainWindow = function () {
        this.mgr.signinRedirect({ data: 'some data' }).then(function () {
            console.log("signinRedirect done");
        }).catch(function (err) {
            console.log(err);
        });
    };
    AuthService.prototype.endSigninMainWindow = function () {
        return this.mgr.signinRedirectCallback();
    };
    AuthService.prototype.startSignoutMainWindow = function () {
        return this.mgr.signoutRedirect().then(function (resp) {
            console.log("signed out", resp);
            setTimeout(5000, function () {
                console.log("testing to see if fired...");
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    AuthService.prototype.endSignoutMainWindow = function () {
        return this.mgr.signoutRedirectCallback().then(function (resp) {
            console.log("signed out", resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    /**
     * Example of how you can make auth request using angulars http methods.
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthGet = function (url, options) {
        this._setAuthHeaders(this.currentUser);
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.get(url, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPut = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.put(url, body, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthDelete = function (url, options) {
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.delete(url, options);
    };
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthService.prototype.AuthPost = function (url, data, options) {
        var body = JSON.stringify(data);
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.post(url, body, options);
    };
    AuthService.prototype._setAuthHeaders = function (user) {
        this.authHeaders = new http_1.Headers();
        this.authHeaders.append('Authorization', user.token_type + " " + user.id_token);
        this.authHeaders.append('Content-Type', 'application/json');
    };
    AuthService.prototype._setRequestOptions = function (options) {
        this._setAuthHeaders(this.currentUser);
        if (options) {
            options.headers.append(this.authHeaders.keys[0], this.authHeaders.values[0]);
        }
        else {
            options = new http_1.RequestOptions({ headers: this.authHeaders, body: "" });
        }
        return options;
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthService);
exports.AuthService = AuthService;
var settings = {
    authority: 'https://accounts.google.com/.well-known/openid-configuration',
    client_id: '587152662839-vr7o37jcpn6ora2llurkdo07u75ne5vl.apps.googleusercontent.com',
    redirect_uri: 'http://localhost:5000/callback',
    post_logout_redirect_uri: 'http://localhost:5000/callback',
    response_type: 'id_token token',
    scope: 'openid email profile',
    silent_redirect_uri: 'http://localhost:5000/callback',
    automaticSilentRenew: true,
    //silentRequestTimeout:10000,
    filterProtocolClaims: true,
    loadUserInfo: true,
};
//# sourceMappingURL=auth.service.js.map