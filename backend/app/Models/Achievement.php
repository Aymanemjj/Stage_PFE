<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Achievement extends Model
{
    protected  $fillable = [
        'name',
        'description',
        'emoji',
        'rarity',
        'type',
        'requirements'
    ];

    public function  achievedBy(): BelongsToMany{
        return $this->belongsToMany(User::class, 'achievements_user', 'achievement_id', 'user_id');
    }
}
