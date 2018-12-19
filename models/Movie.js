const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = Schema({
    director_id: Schema.Types.ObjectId,
    title: {
        type: String,
        required: [true, '`{PATH}` alanına veri girilmesi mecburidir!'],
        maxlength: [100, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    category: {
        type: String,
        maxlength: [30, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    country: {
        type: String,
        maxlength: [30, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` haneden küçük olamaz!'],
        minlength: [5, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` haneden fazla karakter içermelidir!']
    },
    year: {
        type: Number,
        maxlength: [2000, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` yılından küçük olmalıdır!'],
        minlength: [1900, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` yılından büyük olmalıdır!']

    },
    imdb_score: {
        type: Number,
        maxlength: [10, '`{PATH}` alanı (`{VALUE}`), `{MAXLENGTH}` veya daha küçük olmalıdır!'],
        minlength: [0, '`{PATH}` alanı (`{VALUE}`), `{MINLENGTH}` 0 veya daha büyük olmalıdır!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("movie", MovieSchema);