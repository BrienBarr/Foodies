const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//part of the third party authentication
const ThirdPartyProviderSchema = new Schema({
    provider_name: {
        type: String,
        default: null
    },
    provider_id: {
        type: String,
        default: null
    },
    provider_date: {
        type: {},
        default: null
    }
}) 



const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]

    },
    email_is_verified: {
        type: Boolean,
        default: false
    },
    // create a hash for the email
    referral_code: {
        type: String,
        default: function(){
            let hash = 0;
            for (let i = 0; i < this.email.length; i++){
                hash = this.email.charCodeAt(i) + ((hash << 5) - hash);
            }
            let res = (hash & 0x00ffffff).toString(16).toUpperCase();
            return "00000".substring(0, 6 - res.length) + res;
        }
    },
    password: {
        type: String,
        required: true,
        validate: [({ length }) => length >= 6, "Password should be longer."],
        trim: true
    },
    userName: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    discription: {
        type: String
    },
    // this is part of the third party authentication
    third_party_auth: [ThirdPartyProviderSchema],
    date: {
        type: Date,
        default: Date.now
    }
    },
    {strict: false}
);

const Users = mongoose.model("users", UserSchema);

module.exports = Users;
