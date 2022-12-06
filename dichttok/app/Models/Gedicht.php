<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Dyrynda\Database\Support\GeneratesUuid;

class Gedicht extends Model
{
    use HasFactory, GeneratesUuid;

    protected $table = 'gedichten';
    protected $fillable = [
        'titel',
        'gedicht',
        'auteur',
        'context',
    ];
    public function likes()
    {
        return $this->hasMany(Like::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
