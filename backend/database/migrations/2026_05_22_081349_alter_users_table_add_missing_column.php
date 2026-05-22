<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->string('username');
            $table->string('firstname');
            $table->string('lastname');
            $table->string('phone_number')->nullable();
            $table->integer('xp')->default(0);
            $table->string('bio')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['username', 'firstname', 'lastname', 'phone_number', 'xp', 'bio']);
            $table->string('name');
        });
    }
};
