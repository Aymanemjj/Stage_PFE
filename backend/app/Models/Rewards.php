<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Rewards extends Model
{
    protected $fillable = [
        'string',
        'description',
        "type",
        'requirements',
    ];


    public function wonBy(): BelongsToMany{
        return $this->belongsToMany(User::class, 'rewards_user', 'reward_id', 'user_id');
    }
}
