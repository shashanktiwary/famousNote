import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { UserManager, Log, MetadataService, User } from 'oidc-client';

@Injectable()
export class AuthService {
    mgr: UserManager = new UserManager(settings);
    userLoadededEvent: EventEmitter<User> = new EventEmitter<User>();
    currentUser: User;
    loggedIn: boolean = false;

    authHeaders: Headers;


    constructor(private http: Http) {
        console.log('auth service constructor called.');
        this.mgr.getUser()
            .then((user) => {
                if (user) {
                    this.loggedIn = true;
                    this.currentUser = user;
                    this.userLoadededEvent.emit(user);
                }
                else {
                    this.loggedIn = false;
                }
            })
            .catch((err) => {
                this.loggedIn = false;
            });
        this.mgr.events.addUserUnloaded((e) => {
            //   if (!environment.production) {
            console.log("user unloaded");
            //   }
            this.loggedIn = false;
        });
    }
    clearState() {
        this.mgr.clearStaleState().then(function () {
            console.log("clearStateState success");
        }).catch(function (e) {
            console.log("clearStateState error", e.message);
        });
    }

    getUser() {
        this.mgr.getUser().then((user) => {
            console.log("got user", user);
            this.userLoadededEvent.emit(user);
        }).catch(function (err) {
            console.log(err);
        });
    }

    removeUser() {
        this.mgr.removeUser().then(() => {
            this.userLoadededEvent.emit(null);
            console.log("user removed");
        }).catch(function (err) {
            console.log(err);
        });
    }

    startSigninMainWindow() {
        this.mgr.signinRedirect({ data: 'some data' }).then(function () {
            console.log("signinRedirect done");
        }).catch(function (err) {
            console.log(err);
        });
    }
    endSigninMainWindow() {
        return this.mgr.signinRedirectCallback();
    }

    startSignoutMainWindow() {
        return this.mgr.signoutRedirect().then(function (resp) {
            console.log("signed out", resp);
            setTimeout(5000, () => {
                console.log("testing to see if fired...");

            })
        }).catch(function (err) {
            console.log(err);
        });
    };

    endSignoutMainWindow() {
        return this.mgr.signoutRedirectCallback().then(function (resp) {
            console.log("signed out", resp);
        }).catch(function (err) {
            console.log(err);
        });
    };
    /**
     * Example of how you can make auth request using angulars http methods.
     * @param options if options are not supplied the default content type is application/json
     */
    AuthGet(url: string, options?: RequestOptions): Observable<Response> {

        this._setAuthHeaders(this.currentUser);
        
        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.get(url, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthPut(url: string, data: any, options?: RequestOptions): Observable<Response> {

        let body = JSON.stringify(data);

        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.put(url, body, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthDelete(url: string, options?: RequestOptions): Observable<Response> {

        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.delete(url, options);
    }
    /**
     * @param options if options are not supplied the default content type is application/json
     */
    AuthPost(url: string, data: any, options?: RequestOptions): Observable<Response> {

        let body = JSON.stringify(data);

        if (options) {
            options = this._setRequestOptions(options);
        }
        else {
            options = this._setRequestOptions();
        }
        return this.http.post(url, body, options);
    }


    private _setAuthHeaders(user: any) {
        this.authHeaders = new Headers();
        this.authHeaders.append('Authorization', user.token_type + " " + user.access_token);
        this.authHeaders.append('Content-Type', 'application/json');
    }
    private _setRequestOptions(options?: RequestOptions) {

        if (options) {
            options.headers.append(this.authHeaders.keys[0], this.authHeaders.values[0]);
        }
        else {
            options = new RequestOptions({ headers: this.authHeaders, body: "" });
        }

        return options;
    }

}

const settings: any = {
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
