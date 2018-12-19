const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = Schema({
    username: {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        unique: [true, '`{PATH}` bu veri daha evvel girilmiş!'],
        index: true,
        maxlength: [100, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    password: {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        maxlength: [500, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("user", UserSchema);